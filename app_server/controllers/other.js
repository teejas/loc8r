// make GET request
module.exports.about = function(req, res) {
    res.render('generic-text', {
      title: 'About WiFind',
      content: 'WiFind was created to help people find places to sit down and get some work done. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac diam auctor ex mattis euismod. Aliquam posuere sit amet justo nec semper. Etiam scelerisque, odio non aliquam tempor, leo diam elementum sem, vel vulputate ipsum lorem in velit. Vestibulum aliquam facilisis nibh eget efficitur. Fusce vel metus in ligula vehicula elementum pulvinar quis massa. Maecenas eget viverra quam, quis tempus dui. In luctus pulvinar gravida. Donec a felis quis justo consequat lacinia. Suspendisse rutrum, eros in accumsan consectetur, nisl libero sodales lectus, eu lobortis nibh urna ut velit. Fusce lacinia diam ut tincidunt interdum. Donec at mauris felis. Integer sodales eros ac auctor elementum. Nullam sodales in mi venenatis interdum. Integer non arcu vel eros consectetur posuere hendrerit in neque. In sit amet laoreet dui. \n\nDuis fermentum ex at purus pellentesque luctus. Duis sed lacinia mauris. Nam at lectus blandit, porttitor quam et, vehicula augue. Maecenas ultrices placerat lorem a dapibus. Duis in sem imperdiet lectus porttitor molestie nec et lorem. Nunc malesuada neque a arcu pretium fringilla pellentesque at lacus. Donec ultrices nec diam et pharetra. Sed sit amet porttitor ligula. Proin non ante id turpis volutpat euismod sit amet non dolor. Maecenas laoreet enim sit amet ullamcorper ultrices. In elementum luctus tortor venenatis accumsan. Nam dignissim vestibulum iaculis. Phasellus volutpat, lectus a aliquet auctor, enim sem dignissim nulla, id viverra enim leo bibendum metus. Sed eu volutpat ligula, non accumsan orci. Aenean at massa iaculis enim tincidunt laoreet quis id leo.'
    });
};