<template>
  <div class="cartoons-container">
    <div class="txt-cartoon">
      <h2>All Cartoon List</h2>
    </div>

    <div class="cartoonList">
      <div class="cartoon-content" v-for="i in 2">
        <div class="cartoon">
          <div class="poster">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/property-connect-304903.appspot.com/o/userImages%2F36-32%2F1657443616696photo-1503023345310-bd7c1de61c7d.jpeg?alt=media&token=7fb3aebf-5954-42b3-82d7-eb6e369e3ca1"
              alt=""
            />
          </div>

          <div class="info">
            <span>1345</span>
            <span>KongFu Panda</span>
            <div>
              <span>1 ep</span>
              <span class="dot"></span>
              <span>120mins</span>
            </div>
          </div>
        </div>

        <div class="icons">
          <i class="material-icons md-24 green">edit</i>
          <i class="material-icons md-24 red">delete</i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.material-icons.md-24 { font-size: 26px; }
.material-icons.red { color: red; }
.material-icons.green { color: green; }
.cartoons-container {
  margin: 30px 120px;
}
.txt-cartoon h2 {
  padding: 0;
  margin: 0;
}
.cartoon-content {
  padding: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  border-radius: 8px;
}
.poster {
  padding-right: 10px;
}
.poster img {
  width: 80px;
  height: 100%;
  border-radius: 6px;
}
.cartoon {
  display: flex;
  /* background: rgb(150, 77, 77); */
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.9em;
  font-weight: 600;
  margin: 5px;
}
.icons {
  display: flex;
  width: 50px;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
}
.icons i {
    padding-right: 5px;
    cursor: pointer;
}
.dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #666;
  display: inline-block;
  margin: 3px 10px;
}
</style>
