<template>
    <br>
    <div style="text-align: center;">
    <p>
        Teutonic Motors is a global sourcing and shipping Company domiciled in Nairobi, Kenya.  <br>
        We export and ship new & used german vehicles from our primary source markets in <br>
        Europe, Middle east and the Orient.
    </p>
    <p style="
    margin: 20pt;
    font-size: 25pt;
    font-weight: 600;">
        Meet the Team
    </p>

    </div>
    <div>
        <v-row>
            <V-col cols="12" md="4" v-for="member in teamDetails" :key=member.memberNumber>
                <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="350"
      :src="member.memberImage"
      cover
    >
    </v-img>

    <v-card-title class="pt-4">
      {{ member.memberName}}-{{member. memberTitle }}
    </v-card-title>

    <v-card-text >
      <div style="height: 150px;">
        {{ member.memberDescription }}
      </div>
      <div>

      </div>
    </v-card-text>

  </v-card>
            </V-col>
        </v-row>
    </div>

</template>
<script>
export default{
    data(){
        return{
            teamDetails: [
            {
                memberNumber: 1,
                memberName: "Jenas Jermaine",
                memberTitle: "Founder/CEO",
                memberImage: 'public/Images/jenas_jermaine.jpeg',
                memberDescription: "Jenas Jermaine is a seasoned executive with over 8 years of experience in the automotive industry. As CEO of Teutonic Motors, Kairo is responsible for setting the overall direction and strategy of the company. He is committed to ensuring that Teutonic Motors remains at the forefront of the industry, providing our customers with the best possible products and services."
            },
            {
                memberNumber: 2,
                memberName: "Jedidah Mutheu",
                memberTitle: "General Manager",
                memberImage: 'public/Images/jedidah_mutheu.jpeg',
                memberDescription: "Meet Jedidah our General manager He is the man you will find on “the ground” ensuring the cogs & gear that make Teutonic Motors run smoothly. "
            },
            {
                memberNumber: 3,
                memberName: "Jediael Munene",
                memberTitle: "Sales manager",
                memberImage: 'public/Images/jediael_Munene.jpeg',
                memberDescription: "Meet Jediael. He is charismatic and you will meet her at our Nairobi road showroom with a smile on his face ready to assist you with any vehicle enquiry. He is equally excellent in both Local and Import sales."
            }
            ]
        }
    }

}
</script>