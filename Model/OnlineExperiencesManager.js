const myManager = (function () {
  class OnlineExperiencesManager {
    constructor() {
      this.onlineExperiences = [];
      this.filtered = [];
    }
    addExperience(experience) {
      let isAlreadyInExperiences = false;
      for (let i = 0; i < this.onlineExperiences.length; i++) {
        if (this.onlineExperiences[i].id === experience.id) {
          isAlreadyInExperiences = true;
          break;
        }
      }
      if (experience instanceof OnlineExperiences && !isAlreadyInExperiences) {
        this.onlineExperiences.push(experience);
      }
    }
    sortDescending() {
      this.filtered = this.filtered.sort((a, b) => b - a);
    }
    filterBy(categoryParam, value) {
      if (categoryParam === "price") {
        this.filtered = this.onlineExperiences.filter(
          (el) => el.price <= value
        );
      }
      if (categoryParam === "location") {
        this.filtered = this.onlineExperiences.filter((el) =>
          el.location.toLowerCase().includes(value.toLowerCase())
        );
      }
      if (categoryParam === "rating") {
        this.filtered = this.onlineExperiences.filter(
          (el) => el.rating <= value
        );
      }
      if (categoryParam === "category") {
        this.filtered = this.onlineExperiences.filter((el) =>
          el.category.toLowerCase().includes(value.toLowerCase())
        );
      }
      this.sortDescending();
    }
    visit(experience) {
      experience.visitedTimes++;
    }
  }
  return new OnlineExperiencesManager();
})();
