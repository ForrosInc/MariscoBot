var converter	= new showdown.Converter(),
    html	= converter.makeHtml(docs);
document.write(html);
