const grades = [
  {
    id: 1,
    score: 9,
    user_id: 1,
    skill_id: 4,
    created_at: "2021-06-10T16:30:34.242Z",
    updated_at: "2021-06-10T16:30:34.242Z",
  },
  {
    id: 2,
    score: 8,
    user_id: 1,
    skill_id: 5,
    created_at: "2021-06-10T16:30:34.268Z",
    updated_at: "2021-06-10T16:30:34.268Z",
  },
  {
    id: 3,
    score: 8,
    user_id: 2,
    skill_id: 1,
    created_at: "2021-06-10T16:30:34.279Z",
    updated_at: "2021-06-10T16:30:34.279Z",
  },
  {
    id: 4,
    score: 5,
    user_id: 2,
    skill_id: 3,
    created_at: "2021-06-10T16:30:34.288Z",
    updated_at: "2021-06-10T16:30:34.288Z",
  },
  {
    id: 5,
    score: 7,
    user_id: 3,
    skill_id: 3,
    created_at: "2021-06-10T16:30:34.297Z",
    updated_at: "2021-06-10T16:30:34.297Z",
  },
  {
    id: 6,
    score: 7,
    user_id: 3,
    skill_id: 1,
    created_at: "2021-06-10T16:30:34.306Z",
    updated_at: "2021-06-10T16:30:34.306Z",
  },
];
const users = [
  {
    id: 1,
    name: "John",
    created_at: "2021-06-10T16:30:34.169Z",
    updated_at: "2021-06-10T16:30:34.169Z",
  },
  {
    id: 2,
    name: "Jim",
    created_at: "2021-06-10T16:30:34.175Z",
    updated_at: "2021-06-10T16:30:34.175Z",
  },
  {
    id: 3,
    name: "Jen",
    created_at: "2021-06-10T16:30:34.181Z",
    updated_at: "2021-06-10T16:30:34.181Z",
  },
];
const skills = [
  {
    id: 1,
    name: "Ruby",
    created_at: "2021-06-10T16:30:34.124Z",
    updated_at: "2021-06-10T16:30:34.124Z",
  },
  {
    id: 2,
    name: "JS",
    created_at: "2021-06-10T16:30:34.132Z",
    updated_at: "2021-06-10T16:30:34.132Z",
  },
  {
    id: 3,
    name: "rails",
    created_at: "2021-06-10T16:30:34.137Z",
    updated_at: "2021-06-10T16:30:34.137Z",
  },
  {
    id: 4,
    name: "homework1",
    created_at: "2021-06-10T16:30:34.142Z",
    updated_at: "2021-06-10T16:30:34.142Z",
  },
  {
    id: 5,
    name: "homework2",
    created_at: "2021-06-10T16:30:34.147Z",
    updated_at: "2021-06-10T16:30:34.147Z",
  },
];
uiGrades = grades.map((g) => {
  userInfo = users.find((u) => u.id == g.user_id);
  skillInfo = skills.find((s) => s.id == g.skill_id);
  return { ...g, userName: userInfo.name, skillName: skillInfo.name };
});
uiGrades.forEach((uig) => {
  console.log(uig);
});
