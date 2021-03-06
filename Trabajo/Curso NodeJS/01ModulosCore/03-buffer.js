'use strict'

/*var buf = new Buffer(100),
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be'

    buf.write('abcd', 0, 4, 'ascii');

    console.log( buf, buf.toString('ascii'), str, str.length, Buffer.byteLength(str, 'utf8') );*/


const buf = Buffer.alloc(100),
    buf2 = Buffer.alloc(26),
    len = buf.write('\u00bd + \u00bc = \u00be', 0);



console.log( buf, `${len} bytes: ${buf.toString('utf8', 0, len)}`);



for( i=0; i< buf2.length; i++)
    {
        buf2[i] = i + 97;
    }

    console.log(buf2.toString('ascii'));