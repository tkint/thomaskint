<script lang="ts" setup>
import dayjs, { ConfigType } from "dayjs";
import { experiences } from "@/data/resume";
import Panel from "@/components/home/Panel.vue";

const reverse = true;

const sortedExperiences = reverse
  ? Array.from(experiences).reverse()
  : experiences;

const formatDate = (date?: ConfigType) => {
  return date && dayjs(date, "DD/MM/YYYY").format("MMM YYYY");
};
</script>

<template>
  <Panel class="bg-info" vertical-align="middle">
    <template #title>
      <div class="text-uppercase">Expériences</div>
    </template>

    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-4 experience-container">
          <ul>
            <li
              :class="['experience', { current: !experience.endDate, reverse }]"
              v-for="(experience, experienceIndex) in sortedExperiences"
              :key="`experience-${experienceIndex}`"
            >
              <span class="top-date">
                {{
                  reverse
                    ? formatDate(experience.endDate)
                    : formatDate(experience.startDate)
                }}
              </span>

              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ experience.name }}</h5>
                  <h6 class="card-subtitle mb-3 small">
                    {{ experience.role }}
                  </h6>
                  <div class="card-text small">
                    <div
                      v-for="(description, index) in experience.descriptions"
                      :key="`description-${experienceIndex}-${index}`"
                    >
                      {{ description }}
                    </div>
                  </div>
                </div>
              </div>

              <span class="bottom-date">
                {{
                  reverse
                    ? formatDate(experience.startDate)
                    : formatDate(experience.endDate)
                }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Panel>
</template>

<style scoped>
ul {
  list-style: none;
  border-left: 2px dashed #fff;
}

@media (max-width: 576px) {
  .experience-container {
    padding-left: 60px;
    margin-left: 50px;
    margin-right: 5px;
  }
}

.experience:not(:first-child) {
  margin-top: 60px;
}

.card {
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  color: #fff;
  border: none;
}

.card:before {
  content: "";
  width: 2px;
  background: #fff;
  margin-left: -34px;
  position: absolute;
  height: calc(100% - 16px);
  margin-top: 16px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.experience.reverse.current .card:before {
  margin-top: 0;
  height: 100%;
}

.top-date,
.bottom-date {
  position: absolute;
  margin-left: -131px;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  border-radius: 100px;
  width: 80px;
}

.experience:not(.current) .top-date:after,
.experience:not(.current) .bottom-date:after,
.experience.current:not(.reverse) .top-date:after,
.experience.current.reverse .bottom-date:after {
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border: 2px solid #fff;
  position: absolute;
  background: #86b7e7;
  left: 90px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.bottom-date {
  margin-top: -12px;
}
</style>
