<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <!-- CSS
   ============================================ -->

        <!-- Icon Font CSS -->
        <link rel="stylesheet" href="{{ asset("assets/css/plugins/all.min.css") }}">
        <link rel="stylesheet" href="{{ asset("assets/css/plugins/flaticon.css") }}">

        <!-- Plugins CSS -->
        <link rel="stylesheet" href="{{ asset("assets/css/plugins/swiper-bundle.min.css") }}">
        <link rel="stylesheet" href="{{ asset("assets/css/plugins/aos.css") }}">
        <link rel="stylesheet" href="{{ asset("assets/css/plugins/nice-select.css") }}">
        <link rel="stylesheet" href="{{ asset("assets/css/plugins/jquery.powertip.min.css") }}">
        <link rel="stylesheet" href="{{ asset("assets/css/plugins/magnific-popup.css") }}">

        <!-- Main Style CSS -->
        <link rel="stylesheet" href="{{ asset("assets/css/style.css") }}">


        <!-- JS
    ============================================ -->
{{--        <script src="{{ asset("assets/js/vendor/jquery-1.12.4.min.js") }}"></script>--}}
{{--        <script src="{{ asset("assets/js/vendor/modernizr-3.11.2.min.js") }}"></script>--}}

        <!-- Bootstrap JS -->
{{--        <script src="{{ asset("assets/js/plugins/popper.min.js") }}"></script>--}}
{{--        <script src="{{ asset("assets/js/plugins/bootstrap.min.js") }}"></script>--}}

        <!-- Plugins JS -->
        <script src="{{ asset("assets/js/plugins/swiper-bundle.min.js") }}"></script>

{{--        <script src="{{ asset("assets/js/plugins/aos.js") }}"></script>--}}
{{--        <script src="{{ asset("assets/js/plugins/waypoints.min.js") }}"></script>--}}
{{--        <script src="{{ asset("assets/js/plugins/jquery.counterup.min.js") }}"></script>--}}
{{--        <script src="{{ asset("assets/js/plugins/jquery.nice-select.min.js") }}"></script>--}}
{{--        <script src="{{ asset("assets/js/plugins/back-to-top.js") }}"></script>--}}
{{--        <script src="{{ asset("assets/js/plugins/jquery.powertip.min.js") }}"></script>--}}
{{--        <script src="{{ asset("assets/js/plugins/jquery.magnific-popup.min.js") }}"></script>--}}

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
