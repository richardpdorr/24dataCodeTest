<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## 24Data Code Test Project

Description - Code Project Given to by 24Data.

## Installation

Download .sh Shell Script file and place into local/server root.

Use .sh Shell Script file in either Linux Prompt

<code>./setup_laravel.sh **name_for_new_proj_folder**</code>

Or Windows using Cygwin

<code>bash setup_laravel.sh **name_for_new_proj_folder**</code>

**IMPORTANT IF USING WINDOWS USING CYGWIN**

If you choose to use Cygwin with Windows, you must make sure you have the appropriate packages:

- bash
- git

Finally, run 

<code>npm install</code> 

in the new project directory, to download package dependencies. (Doesn't work with Cygwin without patch, so was left out of the shell script).

## Usage
**IMPORTANT: Routes are case-sensitive**

If you are running on local...

    ..and are not using a virtual host

Navigate to: <code>http://localhost/{projDir}/public</code>

    ..and are using a virtual host
    
Navigate to: <code>http://{vhost}</code> where vhost points to public folder

    ..or if hosted on web server
    
Navigate to: <code> http://{webserver} </code>

## PHP Version
5.6 or higher.

## Integrated Frameworks / Packages

JS
- React
- ReactDOM
- react-table
- axios

PHP
- Laravel
- PHP Vars to JS Transformer

## Short Description of Functionality
- Creates table from JSON file on root directory, defaulting LName Descending.
- Used Property names from JSON as column names, for scalable purposes. (Can inject another JSON file, will generate table)
- Removed frontend sort functionality built in with react-table.
- Created dynamic backend PHP Sort functionality, called using XHTTP Request (axios), to fetch sorted JSON.
- Renders new table with fetched JSON.
