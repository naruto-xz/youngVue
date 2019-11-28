/**
 *网页加水印 svg 方式
 *
 * @export
 * @param {*} [{
 *   container = document.body,
 *   content = '请勿外传',
 *   width = '300px',
 *   height = '200px',
 *   opacity = '0.2',
 *   fontSize = '20px',
 *   zIndex = 1000
 * }={}]
 */


(function () {
  // svg 实现 watermark
  function svgWM({
                     container = document.body,
                     content = '请勿外传',
                     width = '200px',
                     height = '100px',
                     opacity = '0.08',
                     fontSize = '12px',
                     zIndex = 10000
                   } = {}) {
    const args = arguments[0];
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <text x="50%" y="50%" dy="12px"
    text-anchor="middle"
    stroke="#000000"
    stroke-width="1"
    stroke-opacity="${opacity}"
    fill="none"
    transform="rotate(-30, 120 60)"
    style="font-size: ${fontSize};">
    ${content}
  </text>
</svg>`;
    const base64Url = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`;
    const vm = document.querySelector('.wm');
    const watermarkDiv = vm || document.createElement("div");
    const styleStr = `
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          z-index:${zIndex};
          pointer-events:none;
          background-repeat:repeat;
          background-image:url('${base64Url}')`;

    watermarkDiv.setAttribute('style', styleStr);

    //检测DOM变化，增加安全性
    watermarkDiv.classList.add('wm');
    if (!vm) {
      container.style.position = 'relative';
      container.insertBefore(watermarkDiv, container.firstChild);
    }
    const MutationObserver = window.MutationObserver;
    if (MutationObserver) {
      let mo = new MutationObserver(function () {
        const wm = document.querySelector('.wm');
        // 只在__wm元素变动才重新调用 __canvasWM
        if ((wm && wm.getAttribute('style') !== styleStr) || !wm) {
          // 避免一直触发
          mo.disconnect();
          mo = null;
          svgWM(JSON.parse(JSON.stringify(args)));
        }
      });
      mo.observe(container, {
        attributes: true,
        subtree: true,
        childList: true
      })
    }

}

  svgWM({
    content: 'QQMusicFE'
  });

})();
