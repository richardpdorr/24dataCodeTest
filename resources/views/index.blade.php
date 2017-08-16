@extends('layouts.app')

@section('page-title')
    <title>24Date Code Test</title>
    <style type="text/css">
        body {
            font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            font-weight: 300;
            font-size: 14px;
        }

        div.ReactTable > div.rt-table {
            flex: none;
        }

    </style>
@endsection

@section('app-content')
    <div id="app">
    </div>

    <div id="sort">
        <div id="sort-cols">
        </div>
        <div id="sort-order">
        </div>
    </div>
@endsection
