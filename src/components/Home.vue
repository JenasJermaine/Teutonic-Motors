<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet">
  </head>
  <br>
  <div style="
  display: flex;
  flex-direction:column;
  align-items: center;">
  <div style="
  text-align: center;
  font-family: Prata, serif;
  font-weight: 500;
  font-size: 25pt;
  font-style: normal;">
    <p>Looking to Buy Car?</p>
    <p style="font-weight: 600;">Welcome to Teutonic Motors </p>
    <p style="font-size: 15pt;">The Home of German Cars in Kenya</p>
  </div>
  <br>
  <br>
  <br>
  <div>
    <v-btn
    to="/Vehicles"
    color="#0FF" 
    style="background-color: #808080;
            color: #0FF ;"
    size="x-large"
    >Vehicles</v-btn>
  </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <div>
    <v-img
    :width="600"
    aspect-ratio="1/1"
    cover
    class="mx-auto"
    src="public/Images/mercedes_benz.jpeg"
  
    ></v-img>
  </div>
  <br>
  <br>
  <br>
  <br>
  <div style="
  text-align: center;
  font-family: Prata, serif;
  font-weight: 500;
  font-size: 25pt;
  font-style: normal;">
    <p style="font-weight: 600;">Find What Suits You</p>
    <p style="font-size: 15pt;">We help you find a car that fits Your personality, <br>
    dream and Pocket!</p>
  </div>


</template>
<script>
export default{

}
</script>