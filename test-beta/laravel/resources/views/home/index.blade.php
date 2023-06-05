@extends('master')
@section('title', 'Inicio / Home')
@section('content')

<!-- banner -->
@include('home.secciones.banners')
<!-- formulario -->
@include('home.secciones.formulario')
<!-- formulario vue reactivo con validacion-->
@include('home.secciones.reactiveform')
<!-- mapa -->
@include('home.secciones.mapa')

@endsection
