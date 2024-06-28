<template>
    <br>
    <div>
        <v-text-field label="Search for vehicle" variant="outlined" width="400" class="mx-auto"></v-text-field>
    </div>
    <div>
    <v-row>
    <v-col cols="12" md="4" v-for="vehicle in vehicle" :key="vehicle.vehicleNumber">
        <v-card
        class="mx-auto my-12"
        max-width="374"
    >
        <v-img
        height="250"
        :src= "vehicle.vehicleImage"
        cover
        ></v-img>

        <v-card-item>
        <v-card-title>{{ vehicle.vehicleName }}</v-card-title>
        </v-card-item>

        <v-card-text>
        <div class="my-4 text-subtitle-1">
         {{ vehicle.vehiclePrice }}
        </div>

        <div>{{ vehicle.description }}</div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-actions>
            <v-btn
            color="#0FF"
            text="Add to Favourites"
            block
            style="background-color: #808080;"
            border
            @click="addToFavourites(vehicle)"
            ></v-btn>
        </v-card-actions>
        <v-card-actions>
        <v-btn
            color="#0FF"
            text="Enquire"
            block
            border
            @click="openWhatsApp"
            style="background-color: #808080;"
            ></v-btn>
        </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
    </div>

</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default{
    data(){
        return{

        }
    },
    methods:{
        openWhatsApp() {
      const phoneNumber = '+254708838460'; 
      const message = 'Hello, I would like to enquire on the following vehicle :'; 

      let whatsappUrl = `https://wa.me/${phoneNumber}`;
      if (message) {
        whatsappUrl += `?text=${encodeURIComponent(message)}`;
      }

      window.open(whatsappUrl, '_blank');
    },
        ...mapActions([
            'addToFavourites'
        ])
    },
    computed:{
        ...mapGetters({
            vehicle: 'vehicle'
        })
    }

}
</script>