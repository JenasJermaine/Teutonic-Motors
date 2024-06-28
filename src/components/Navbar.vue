<template>
    <v-app-bar :elevation="2" color="#555" height="100">
    <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title >

    <v-btn to="/" stacked color="#0FF"> 
    <v-img width="30px" height="30px" src="public\Images\Logo 2.png"></v-img>
    Teutonic Motors</v-btn>
    </v-app-bar-title>

    <template v-slot:append>
        <v-btn to="/Vehicles" color="#0FF" >Vehicles</v-btn>
        <v-btn to="/Favourites" color="#0FF">Favourites</v-btn>
        <v-btn to="/About" color="#0FF">About</v-btn>
        <v-btn to="/Contact" color="#0FF">Contact</v-btn>
    </template>
    </v-app-bar>
</template>