<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ room.HotelName }}</h2>
        <br />
        <p>
          Hotel ID: <br /><strong>{{ room.HotelFK }}</strong>
        </p>
        <p>
          Room Type: <br /><strong>{{ room.RoomType }}</strong>
        </p>
        <p>
          Floor Number <br /><strong>{{ room.FloorNumber }}</strong>
        </p>
        <p>
          Hotel Star <br /><strong>{{ room.HotelStar }}</strong>
        </p>
      </div>
    </div>

    <router-link v-if="auth" :to="`/rooms/${this.$route.params.pk}/review`"
      ><button class="btn btn-success">Add a Review</button>
    </router-link>

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">Sign In to Add a Review</button>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    room() {
      let allRooms = this.$store.state.rooms;

      let thisRoom = allRooms.find((aRoom) => {
        return aRoom.RoomPK == this.$route.params.pk;
      });

      return thisRoom;
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
