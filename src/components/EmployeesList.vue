<template>
  <div class="employee">
    <!-- employee info -->
    <div class="employee-pf">
      <img
        :src="`https://reqres.in/img/faces/${employee.avatar}`"
        alt="Employee Avatar"
      />
      <div>
        <h3>{{ employee.first_name }} {{ employee.last_name }}</h3>
        <p>{{ employee.email }}</p>
      </div>
    </div>

    <!-- icon button -->
    <div class="icon">
      <i class="material-icons">delete</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["employee"],
};
</script>

<style scoped>
.employee {
  background: #fff;
  display: flex;
  padding: 18px;
  margin: 12px;
  border-radius: 8px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  justify-content: space-between;
  align-items: center;
}
.employee-pf {
  display: flex;
}
.employee-pf img {
  border-radius: 50%;
  border: 2px solid #e7e7e7;
}
.employee-pf div {
  padding-left: 18px;
}

.icon {
  display: inline-block;
  text-align: right;
}

.icon i {
  font-style: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}

.icon i.active {
  color: #ff005d;
}
</style>
