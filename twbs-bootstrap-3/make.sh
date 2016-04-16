#! /bin/bash
lessc less/bootstrap-pr.less --source-map="css/bootstrap-pr.map" > css/bootstrap-pr.css
lessc less/bootstrap-pr.less --clean-css="--s1 --advanced --compatibility=ie8" > css/bootstrap-pr.min.css
