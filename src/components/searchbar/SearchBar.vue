<template>
  <div class="searchbar-container">
    <input v-model="searchTerm" type="text" class="form-control" placeholder="Searching places..."/>
    <SearchResult/>
  </div>
</template>

<script lang="ts" src="./SearchBar.ts"/>

<style scoped>
.searchbar-container{
    position: fixed;
    top: 30px;
    left: 30px;
    background-color: white;
    z-index: 999;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    width: 250px;
    border-radius: 10px !important;
    overflow: hidden;
    padding: 5px;
}


</style>
