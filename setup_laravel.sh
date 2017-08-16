#!/bin/sh
# Laravel 5 New Code Test Batch Script For FullStack Dev
projectname=$1
localuser=$2
localpass=$3
git clone https://github.com/richardpdorr/24dataCodeTest.git ${projectname} >/dev/null
cd ${projectname}
rm -rf .git
composer install >/dev/null
npm install >/dev/null
bower install
php artisan key:generate
php artisan app:name ${projectname}
mysql --host=127.0.0.1 --user=${localuser} --password=${localpass}
CREATE DATABASE 24datatest;
exit;
echo -e "############################
All Done! Crafted a new Laravel 5 app for you! Called ${1}
############################";