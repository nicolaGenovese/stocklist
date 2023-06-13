function downloadWebpageAsImage() {
    const webpageElement = document.documentElement;

    html2canvas(webpageElement).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "webpage.png";

      const imageDataURL = canvas.toDataURL("image/png");

      link.href = imageDataURL;

      link.click();
    });
  }