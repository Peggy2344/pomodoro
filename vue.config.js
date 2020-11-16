module.exports = {
  publicPath: './',
  pwa: {
    // manifest.json 的設定
    manifestOptions: {
      // APP 名稱
      name: '番茄鐘',
      short_name: '番茄鐘',
      // APP 主題顏色
      theme_color: '#4DBA87',
      // APP 啟動畫面背景色
      background_color: '#000',
      // APP 顯示範圍
      scope: './',
      // APP 開始畫面網址
      start_url: './',
      // 顯示模式
      // browser: 瀏覽器
      // fullscreen: 全螢幕，隱藏所有瀏覽器 UI
      // standalone: 隱藏標準瀏覽器 UI ，如 URL 欄
      // minimal-ui: 有最小導覽列 UI，Chrome不支援
      display: 'standalone'
    }
  }
}
