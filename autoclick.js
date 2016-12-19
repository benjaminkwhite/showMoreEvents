(function () {

  var body = document.body;
  var list = document.getElementsByClassName('showMoreEvents');
  var tempDisable = 'N';

  if (list[0] !== undefined) {
    console.log(list[0]);
    window.addEventListener("scroll", function (event) {
      if (((body.scrollHeight - body.offsetHeight) - this.scrollY) > 150) {
        tempDisable = 'N';
      }

      if (((body.scrollHeight - body.offsetHeight) - this.scrollY) < 150) {
        if (tempDisable === 'N') {
          list[0].click();
          tempDisable = 'Y';
        }
      }

    }, false);
  };

})();
