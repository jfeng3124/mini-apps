// module.exports = {
  post = (req, res) => {
    var result, ctr, keys, columnDelimiter, lineDelimiter, input;

    input = req || null;
    if (input === null || !input.length) {
      return null;
    }

    columnDelimiter = req.columnDelimiter || ',';
    lineDelimiter = req.lineDelimiter || '\n';

    keys = Object.keys(input[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    input.forEach(function(item) {
      ctr = 0;
      keys.forEach(function(key) {
        if (ctr > 0) result += columnDelimiter;
        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });
    console.log(result)
    return result;
  }

// }