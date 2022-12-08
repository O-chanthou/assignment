<template>
  <div class="ctn-item">
    <router-link :to="{name: 'details', params: {id: cartoon.id, title: cartoon.title}}">
      <div class="ctn-poster">
        <img
          :src="cartoon.image"
          onerror="src='/src/assets/cartoon.png'; title='image not found'"
          alt="Cartoon Poster"
          :title="cartoon.title"
        />
      </div>

      <div class="ctn-detail">
        <h3 class="ctn-name">{{ cartoon.title }}</h3>

        <div class="fd-infor">
          <div>
            <span class="ctn-year">{{ cartoon.year }}</span>
            <span class="dot"></span>
            <span class="ctn-duration">{{ cartoon.runtime_in_minutes }}m</span>
          </div>
          <span class="ctn-type">{{$t(`genre.${cartoon.genre[0]}`)}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  cartoon: Object
})

</script>

<style>
.grid-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}
.ctn-item {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 15%;
  border-radius: 8px;
  margin: 10px;
}
.ctn-item a {
  color: inherit;
  text-decoration: none;
}
.ctn-item .ctn-poster img {
  width: 100%;
  height: 340px;
  border-radius: 8px 8px 0 0;
}
.ctn-poster img:hover {
  opacity: 0.6;
}
.ctn-item:hover {
  background: #a2d366;
  cursor: pointer;
}
.ctn-detail {
  padding: 0 10px 10px 10px;
}
.ctn-detail .ctn-name {
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fd-infor {
  line-height: 1.3em;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.fd-infor .dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #666;
  display: inline-block;
  margin: 3px 10px;
}
.fd-infor .ctn-type {
  padding: 2px;
  border: 2px solid #666;
  font-size: 1em;
  line-height: 1em;
  border-radius: 4px;
}
</style>
