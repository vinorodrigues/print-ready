#! /bin/bash
rm css/bootstrap-pr.min.css
rm css/bootstrap-pr.css
rm css/bootstrap-pr.css.map

compass compile -e production
mv css/bootstrap-pr.css css/bootstrap-pr.min.css

compass compile

echo Done.
