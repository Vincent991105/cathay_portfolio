// Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this
// array and print it out.

function sortUserName(users) {
  // 防止輸入值不是陣列
  if (!Array.isArray(users)) {
    throw new Error("Input must be an arra)");
  }

  // 根據題目需求回傳排序後的結果
  return [...users].sort((a, b) => {
    // 取得物件屬性並安全地轉為小寫的輔助函數
    const getLowerCase = (obj, prop) => (obj[prop] || "").toLowerCase();

    // 1. 依據 firstName 排序
    const firstNameA = getLowerCase(a, "firstName");
    const firstNameB = getLowerCase(b, "firstName");
    if (firstNameA !== firstNameB) {
      return firstNameA.localeCompare(firstNameB);
    }

    // 2. 如果 firstName 相同，則依據 lastName 排序
    const lastNameA = getLowerCase(a, "lastName");
    const lastNameB = getLowerCase(b, "lastName");
    if (lastNameA !== lastNameB) {
      return lastNameA.localeCompare(lastNameB);
    }

    // 3. 如果姓名都相同，最後依據 customerID 排序
    const customerIDA = parseInt(a.customerID, 10) || 0; // 如果無效則預設為 0
    const customerIDB = parseInt(b.customerID, 10) || 0; // 如果無效則預設為 0
    return customerIDA - customerIDB;
  });
}

// Q2. Please sort by ‘profession’ to follow the principle.
// (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)

function sortByType(users) {
  // 防止輸入的值是非List形式
  if (!Array.isArray(users)) {
    throw new Error("Input must be an array");
  }

  // 依照題目制定排序等級
  const professionOrder = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  };

  return users.sort((a, b) => {
    const rankA = professionOrder[a.profession] || 0;
    const rankB = professionOrder[b.profession] || 0;
    return rankB - rankA; // 由大到小
  });
}

const users = [
  {
    firstName: "Alice",
    lastName: "Smith",
    customerID: "101",
    note: "",
    profession: "student",
  },
  {
    firstName: "Alen",
    lastName: "Johnson",
    customerID: "205",
    note: "VIP",
    profession: "engineer",
  },
  {
    firstName: "Charlie",
    lastName: "Brown",
    customerID: "89",
    note: "",
    profession: "freelancer",
  },
  {
    firstName: "Diana",
    lastName: "",
    customerID: "303",
    note: "New customer",
    profession: "systemAnalytics",
  },
  {
    firstName: "Ethan",
    lastName: "Williams",
    customerID: "77",
    note: "",
    profession: "productOwner",
  },
  {
    firstName: "Fiona",
    lastName: "Davis",
    customerID: "412",
    note: "",
    profession: "student",
  },
  {
    firstName: "George",
    lastName: "Miller",
    customerID: "150",
    note: "",
    profession: "engineer",
  },
  {
    firstName: "Hannah",
    lastName: "",
    customerID: "230",
    note: "Important",
    profession: "freelancer",
  },
  {
    firstName: "Ian",
    lastName: "Taylor",
    customerID: "98",
    note: "",
    profession: "systemAnalytics",
  },
  {
    firstName: "Julia",
    lastName: "Anderson",
    customerID: "501",
    note: "Top priority",
    profession: "productOwner",
  },
];

// 執行排序並輸出
console.log("Q1-1：", sortUserName(users));
console.log("Q1-2：", sortByType(users));
