<template>
    <h1 style="text-align: center;">Favourites</h1>
    <div>
    <v-row>
    <v-col cols="12" md="4" v-for="vehicle in favouritesDetails" :key="vehicle">
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
            text="Remove"
            block
            style="background-color: #808080;"
            border
            @click="removeFromFavourites(vehicle)"
            ></v-btn>
        </v-card-actions>
        <v-card-actions>
        <v-btn
            color="#0FF"
            text="Enquire"
            block
            style="background-color: #808080;"
            border
            @click="reserve"
            ></v-btn>
        </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
    </div>

</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default{
    data(){
        return{


        }
    },
    methods: {
        ...mapActions([
            'removeFromFavourites'
        ])

    },
    computed: {
        ...mapGetters({
            favouritesDetails: 'favourite'
        })
    }

}
</script>