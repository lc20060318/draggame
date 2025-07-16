const dragDirective = {
  mounted(el) {
    // 记录克隆节点状态
    const nodeState = {
      cloneNode: null,
      offsetX: 0,
      offsetY: 0,
      targetElement: null, // 当前接近的目标元素
      isSnapped: false,    // 是否已吸附
    }

    // 吸附热区大小（像素）
    const SNAP_THRESHOLD = 30;

    // 创建克隆节点
    const createCloneNode = () => {
      const cloneNode = el.cloneNode(true)
      cloneNode.style.position = 'fixed'
      cloneNode.style.cursor = 'grabbing'
      cloneNode.style.zIndex = '9999'
      cloneNode.style.opacity = '0.8'
      cloneNode.style.pointerEvents = 'none'
      cloneNode.style.boxSizing = 'border-box'
      cloneNode.classList.add('dragging')
      
      // 重置可能影响布局的样式
      cloneNode.style.width = `${el.offsetWidth}px`
      cloneNode.style.height = `${el.offsetHeight}px`
      cloneNode.style.margin = '0'
      
      return cloneNode
    }

    // 更新节点位置
    const updateNodePosition = (node, x, y) => {
      // 如果在热区内，吸附到目标中心
      if (nodeState.targetElement && !nodeState.isSnapped) {
        const targetRect = nodeState.targetElement.getBoundingClientRect()
        const targetCenterX = targetRect.left + targetRect.width / 2
        const targetCenterY = targetRect.top + targetRect.height / 2
        
        // 计算距离目标中心的距离
        const distanceX = Math.abs(x - targetCenterX)
        const distanceY = Math.abs(y - targetCenterY)
        
        // 如果距离小于阈值，吸附到目标中心
        if (distanceX < SNAP_THRESHOLD && distanceY < SNAP_THRESHOLD) {
          x = targetCenterX
          y = targetCenterY
          nodeState.isSnapped = true
          
          // 添加吸附效果的视觉反馈
          nodeState.targetElement.classList.add('snap-hover')
        }
      }
      
      node.style.left = `${x - nodeState.offsetX}px`
      node.style.top = `${y - nodeState.offsetY}px`
    }

    // 检查元素重叠及热区
    const checkOverlap = (dragElement, mouseX, mouseY) => {
      // 修正：添加对 eleven 类的支持
      const targetClasses = Array.from({ length: 11 }, (_, i) => `.${['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'][i]}`).join(', ')
      const targets = document.querySelectorAll(targetClasses)
      
      // 重置之前的目标元素样式
      if (nodeState.targetElement) {
        nodeState.targetElement.classList.remove('snap-hover')
        nodeState.targetElement = null
      }
      
      nodeState.isSnapped = false
      
      let closestTarget = null
      let minDistance = Infinity
      
      for (const target of targets) {
        const targetRect = target.getBoundingClientRect()
        
        // 计算鼠标到目标中心的距离
        const targetCenterX = targetRect.left + targetRect.width / 2
        const targetCenterY = targetRect.top + targetRect.height / 2
        const distance = Math.sqrt(
          Math.pow(mouseX - targetCenterX, 2) + 
          Math.pow(mouseY - targetCenterY, 2)
        )
        
        // 如果在热区内且是最近的目标
        if (distance < SNAP_THRESHOLD * 1.5 && distance < minDistance) {
          minDistance = distance
          closestTarget = target
        }
      }
      
      // 设置当前目标元素
      if (closestTarget) {
        nodeState.targetElement = closestTarget
      }
      
      // 检查是否完全重叠（用于最终放置判断）
      for (const target of targets) {
        const targetRect = target.getBoundingClientRect()
        if (
          mouseX >= targetRect.left &&
          mouseX <= targetRect.right &&
          mouseY >= targetRect.top &&
          mouseY <= targetRect.bottom
        ) {
          // 返回任何重叠的目标元素，不严格要求 ID 匹配
          return target
        }
      }
      
      return null
    }

    // 处理鼠标/触摸移动
    const handlePointerMove = (e) => {
      e.preventDefault()
      if (!nodeState.cloneNode) return

      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY

      // 检查热区和吸附
      checkOverlap(nodeState.cloneNode, clientX, clientY)
      
      requestAnimationFrame(() => {
        updateNodePosition(nodeState.cloneNode, clientX, clientY)
      })
    }

    // 处理拖拽结束
    const handlePointerUp = (e) => {
      if (nodeState.cloneNode) {
        // 修正：正确获取 clientX 和 clientY
        const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
        const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY

        const targetElement = checkOverlap(nodeState.cloneNode, clientX, clientY)

        if (targetElement) {
          el.dispatchEvent(
            new CustomEvent('dragMatch', {
              detail: {
                dragId: nodeState.cloneNode.dataset.id,
                targetId: targetElement.dataset.id,
              },
              bubbles: true,
            })
          )
        }

        // 重置目标元素样式
        if (nodeState.targetElement) {
          nodeState.targetElement.classList.remove('snap-hover')
          nodeState.targetElement = null
        }

        nodeState.cloneNode.remove()
        nodeState.cloneNode = null
      }

      document.removeEventListener('mousemove', handlePointerMove)
      document.removeEventListener('mouseup', handlePointerUp)
      document.removeEventListener('touchmove', handlePointerMove)
      document.removeEventListener('touchend', handlePointerUp)
    }

    // 处理拖拽开始
    const handlePointerDown = (e) => {
      if (e.type === 'mousedown' && e.button !== 0) return
      
      e.preventDefault()
      
      const rect = el.getBoundingClientRect()
      nodeState.offsetX = e.clientX - rect.left
      nodeState.offsetY = e.clientY - rect.top

      nodeState.cloneNode = createCloneNode()
      document.body.appendChild(nodeState.cloneNode)

      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      updateNodePosition(nodeState.cloneNode, clientX, clientY)

      document.addEventListener('mousemove', handlePointerMove)
      document.addEventListener('mouseup', handlePointerUp)
      document.addEventListener('touchmove', handlePointerMove, { passive: false })
      document.addEventListener('touchend', handlePointerUp)
    }

    el.addEventListener('mousedown', handlePointerDown)
    el.addEventListener('touchstart', handlePointerDown, { passive: false })

    el._cleanup = () => {
      el.removeEventListener('mousedown', handlePointerDown)
      el.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('mousemove', handlePointerMove)
      document.removeEventListener('mouseup', handlePointerUp)
      document.removeEventListener('touchmove', handlePointerMove)
      document.removeEventListener('touchend', handlePointerUp)
      if (nodeState.cloneNode) {
        nodeState.cloneNode.remove()
      }
      if (nodeState.targetElement) {
        nodeState.targetElement.classList.remove('snap-hover')
      }
    }
  },

  unmounted(el) {
    el._cleanup?.()
  },
}

export default dragDirective