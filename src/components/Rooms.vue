<template>
  <div>
    <h1>Hotel Rooms</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Hotel</th>
          <th>Room Type</th>
          <th>Floor Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aRoom in theRooms" :key="aRoom.RoomPK">
          <th>{{ aRoom.HotelName }}</th>
          <th>{{ aRoom.RoomType }}</th>
          <th>{{ aRoom.FloorNumber }}</th>
          <th>
            <router-link :to="`/rooms/${aRoom.RoomPK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theRooms() {
      return this.$store.state.rooms;
    },
  },
};
</script>

<style></style>
