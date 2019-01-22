import ltrim from './ltrim'

/**
 * Transform a query string into his object (key => pairs) representation
 * @param 	{String}  	queryString  	The query string to process
 * @return 	{Object} 					The object representation of the query string
 *
 * @example    js
 * import queryStringToObject from 'coffeekraken-sugar/js/utils/strings/queryStringToObject'
 * queryStringToObject('?var1=value1&var2=value2') // { var1: 'value1', var2: 'value2' }
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 * @see  	http://stackoverflow.com/questions/8648892/convert-url-parameters-to-a-javascript-object
 */
export default function queryStringToObject(str) {
  str = ltrim(str, '?')
  str = decodeURIComponent(str);
  var chunks = str.split('&'),
	  obj = {};
  chunks = chunks.filter((ch) => {
	  return ch !== ''
  })
  for(var c=0; c < chunks.length; c++) {
    var split = chunks[c].split('=', 2);
    obj[split[0]] = split[1];
  }
  return obj;
}
