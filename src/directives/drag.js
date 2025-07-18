const dragDirective = {
  mounted(el) {
    // 记录克隆节点状态
    const nodeState = {
      cloneNode: null,
      startX: 0,
      startY: 0,
      isDragging: false,
      touchId: null,
    }

    // 吸附热区大小（像素）- 根据屏幕尺寸动态调整
    let SNAP_THRESHOLD = 30;
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      SNAP_THRESHOLD = 45; // 移动端使用更大的吸附范围
    }

    // 【核心新增】扩大点击触发范围（单位：px），数值越大范围越广
    const CLICK_RANGE_EXPAND = 20; // 可修改此值（如30表示扩大30px）

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
      cloneNode.style.padding = '15px 0px 0px 0px'
      cloneNode.style.transform = 'none'
      cloneNode.style.transition = 'none'
      cloneNode.style.fontSize = '15px'
      return cloneNode
    }
    

    // 更新节点位置 - 确保元素中心与指针位置对齐
    const updateNodePosition = (node, x, y) => {
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      const left = x - width / 2;
      const top = y - height / 2;
      
      // 检查吸附
      if (nodeState.targetElement && !nodeState.isSnapped) {
        const targetRect = nodeState.targetElement.getBoundingClientRect()
        const targetCenterX = targetRect.left + targetRect.width / 2
        const targetCenterY = targetRect.top + targetRect.height / 2
        
        const distanceX = Math.abs(x - targetCenterX)
        const distanceY = Math.abs(y - targetCenterY)
        
        if (distanceX < SNAP_THRESHOLD && distanceY < SNAP_THRESHOLD) {
          node.style.left = `${targetCenterX - width / 2}px`
          node.style.top = `${targetCenterY - height / 2}px`
          nodeState.isSnapped = true
          nodeState.targetElement.classList.add('snap-hover')
          return;
        }
      }
      
      // 正常定位
      node.style.left = `${left}px`
      node.style.top = `${top}px`
    }

    // 检查元素重叠及热区
    const checkOverlap = (mouseX, mouseY) => {
      const targetClasses = Array.from({ length: 16 }, (_, i) => `.${['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen'][i]}`).join(', ')
      const targets = document.querySelectorAll(targetClasses)
      
      if (nodeState.targetElement) {
        nodeState.targetElement.classList.remove('snap-hover')
        nodeState.targetElement = null
      }
      
      nodeState.isSnapped = false
      
      let closestTarget = null
      let minDistance = Infinity
      
      for (const target of targets) {
        const targetRect = target.getBoundingClientRect()
        const targetCenterX = targetRect.left + targetRect.width / 2
        const targetCenterY = targetRect.top + targetRect.height / 2
        const distance = Math.sqrt(
          Math.pow(mouseX - targetCenterX, 2) + 
          Math.pow(mouseY - targetCenterY, 2)
        )
        
        if (distance < SNAP_THRESHOLD * 1.5 && distance < minDistance) {
          minDistance = distance
          closestTarget = target
        }
      }
      
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
          return target
        }
      }
      
      return null
    }

    // 处理鼠标/触摸移动
    const handlePointerMove = (e) => {
      if (!nodeState.isDragging) return
      
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      if (e.cancelable) {
        e.preventDefault();
      }
      
      checkOverlap(clientX, clientY);
      
      requestAnimationFrame(() => {
        updateNodePosition(nodeState.cloneNode, clientX, clientY);
      });
    }

    // 处理拖拽结束
    const handlePointerUp = (e) => {
      if (!nodeState.isDragging) return
      
      const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
      
      if (e.cancelable) {
        e.preventDefault();
      }
      
      nodeState.isDragging = false;
      nodeState.touchId = null;
      
      const targetElement = checkOverlap(clientX, clientY);

      if (targetElement) {
        el.dispatchEvent(
          new CustomEvent('dragMatch', {
            detail: {
              dragId: el.dataset.id,
              targetId: targetElement.dataset.id,
            },
            bubbles: true,
          })
        );
      }

      if (nodeState.targetElement) {
        nodeState.targetElement.classList.remove('snap-hover');
        nodeState.targetElement = null;
      }

      if (nodeState.cloneNode) {
        nodeState.cloneNode.remove();
        nodeState.cloneNode = null;
      }

      document.body.style.overflow = '';
      
      document.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseup', handlePointerUp);
      document.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('touchend', handlePointerUp);
    }

    // 处理拖拽开始（原有逻辑不变）
    const handlePointerDown = (e) => {
      // 忽略右键点击
      if (e.type === 'mousedown' && e.button !== 0) return
      
      // 防止选择文本
      if (e.cancelable) {
        e.preventDefault();
      }
      
      // 记录触摸点ID
      if (e.touches && e.touches.length > 0) {
        nodeState.touchId = e.touches[0].identifier;
      }
      
      nodeState.startX = e.touches ? e.touches[0].clientX : e.clientX;
      nodeState.startY = e.touches ? e.touches[0].clientY : e.clientY;
      
      // 创建克隆节点
      nodeState.cloneNode = createCloneNode();
      document.body.appendChild(nodeState.cloneNode);
      
      // 初始定位
      updateNodePosition(nodeState.cloneNode, nodeState.startX, nodeState.startY);
      
      // 设置拖拽状态
      nodeState.isDragging = true;
      
      // 防止拖拽时页面滚动
      document.body.style.overflow = 'hidden';
      
      // 添加事件监听
      document.addEventListener('mousemove', handlePointerMove);
      document.addEventListener('mouseup', handlePointerUp);
      document.addEventListener('touchmove', handlePointerMove, { passive: false });
      document.addEventListener('touchend', handlePointerUp);
    }

    // 【核心新增】全局点击事件处理：判断是否在扩大后的范围内
    const handleGlobalPointerDown = (e) => {
      // 1. 获取当前点击坐标
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      // 2. 获取元素自身的位置和尺寸（用于计算范围）
      const elRect = el.getBoundingClientRect();

      // 3. 计算“扩大后的触发范围”（元素原范围向外扩展 CLICK_RANGE_EXPAND）
      const expandLeft = elRect.left - 50;   // 左边界扩展
      const expandRight = elRect.right + 50; // 右边界扩展
      const expandTop = elRect.top - 0;     // 上边界扩展
      const expandBottom = elRect.bottom + 0; // 下边界扩展

      // 4. 判断点击是否在“扩大后的范围内”
      const isInExpandRange = (
        clientX >= expandLeft &&    // 点击x坐标 >= 扩展后的左边界
        clientX <= expandRight &&   // 点击x坐标 <= 扩展后的右边界
        clientY >= expandTop &&     // 点击y坐标 >= 扩展后的上边界
        clientY <= expandBottom     // 点击y坐标 <= 扩展后的下边界
      );

      // 5. 如果在范围内，触发拖拽开始
      if (isInExpandRange) {
        handlePointerDown(e);
      }
    }

    // 【修改】初始化：从“元素自身事件”改为“全局事件监听”
    document.addEventListener('mousedown', handleGlobalPointerDown);
    document.addEventListener('touchstart', handleGlobalPointerDown, { passive: false });

    // 清理
    el._cleanup = () => {
      // 【修改】移除全局事件监听
      document.removeEventListener('mousedown', handleGlobalPointerDown);
      document.removeEventListener('touchstart', handleGlobalPointerDown);
      
      document.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseup', handlePointerUp);
      document.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('touchend', handlePointerUp);
      
      if (nodeState.cloneNode) {
        nodeState.cloneNode.remove();
      }
      
      if (nodeState.targetElement) {
        nodeState.targetElement.classList.remove('snap-hover');
      }
      
      document.body.style.overflow = '';
      nodeState.touchId = null;
    }
  },

  unmounted(el) {
    el._cleanup?.()
  },
}

export default dragDirective