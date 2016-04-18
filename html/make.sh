#! /bin/bash
rm css/print-ready.min.css
rm css/print-ready.css
rm css/print-ready.css.map

compass compile -e production
mv css/print-ready.css css/print-ready.min.css

compass compile

echo Done.
