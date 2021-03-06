import { shallowMount } from "@vue/test-utils";
import StudentDetails from "../../src/components/student/studentDetails.vue";

describe("StudentDetails", () => {
  it("is a vue instance", () => {
    const wrapper = shallowMount(StudentDetails);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it("works with prop studentName", () => {
    const wrapper = shallowMount(StudentDetails, {
      propsData: {
        studentName: "Test Name"
      }
    });
    expect(wrapper.find("h1").text()).toBe("Test Name");
  });
});
