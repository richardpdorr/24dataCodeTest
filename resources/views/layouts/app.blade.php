<html lang="{{ app()->getLocale() }}">
<head>
    @yield('page-title')

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!-- Styles -->

</head>
<body>
@yield('app-content')

@include('footer')
<script src="{{asset('js/app.js')}}"></script>
<script>console.log(tableData)</script>
</body>
</html>
