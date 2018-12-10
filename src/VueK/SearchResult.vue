<script>
  export default {
    name: 'searchResult',
    data(){
      return {
        recentData : ["Add new role","Add role detail","View audit details"],
        rolesData : ["Add new role","Add role detail","View audit details","Delete Role","Discontinue Role","Add new position","Delete position",
        "Ad new role","Add role detail","View audit details","Delete Role","Discontinue Role"],
        usersData : ["New test user","Assign roles"],
        fncUserData : ["Add new function user","Edit user details","Delete functional user","Assign Role"]
      }
    },
    methods: {
    },
  };
</script>
<template>
  <div class="result-whole-style">
    <div class="grid-container-main">
      <div class="grid-item-main right-grey-border" style="padding-left: 20px;">
        <div class="grid-container-child grid-col-1">
          <div class="grid-item-child-header">Recent</div>
          <div class="grid-item-child-opt" v-for="item in recentData"><span class="tour-opt-text">{{item}}</span></div>
        </div>
      </div>
      <div class="grid-item-main grid-col-2 right-grey-border left-grey-border" style="padding-left:37px;padding-right:15px">
        <div class="grid-container-child grid-col-2">
          <div class="grid-item-child-header" style="grid-column: 1 / 3;" >Roles</div>
          <div class="grid-item-child-opt" v-for="item in rolesData"><span class="tour-opt-text">{{item}}</span></div>
        </div>
      </div>
      <div class="grid-item-main right-grey-border left-grey-border" style="padding-left:37px;padding-right:15px">
        <div class="grid-container-child grid-col-1">
          <div class="grid-item-child-header">Users</div>
          <div class="grid-item-child-opt" v-for="item in usersData"><span class="tour-opt-text">{{item}}</span></div>
        </div>
      </div>  
      <div class="grid-item-main left-grey-border" style="padding-left:37px;padding-right:15px">
        <div class="grid-container-child grid-col-1">
          <div class="grid-item-child-header">Functional Users</div>
          <div class="grid-item-child-opt" v-for="item in fncUserData"><span class="tour-opt-text">{{item}}</span></div>
        </div>
      </div>
    </div>
  </div>  
</template>
<style>
.result-whole-style{
    width: 91%;
    height: 33px;
}
.grid-container-main {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: left;
  left: 5%;
  position: relative;
}
.grid-item-main {
}
.grid-col-2{
  grid-column: 2 / 4;
}
.right-grey-border{
  border-right: 1px solid #88888854;
}
.left-grey-border{
  border-left: 1px solid #88888854;
}
.grid-container-child{
  width: 100%;
  display: grid;
}
.grid-col-1{
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.grid-col-2{
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.grid-item-child-header{
  color: #888888;
  font-size: 18px;
  font-weight: bold;
}
.grid-item-child-opt{
  color: #0099ff;
  font-size: 15px;
}
.tour-opt-text{
  cursor: pointer;
}
.tour-opt-text:hover{
  font-weight: bold;
}
</style>