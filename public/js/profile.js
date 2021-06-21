const newFormHandler = async (event) => {
  event.preventDefault();

  const service_name = document.querySelector("#sub-name").value.trim();
  const price = document.querySelector("#sub-price").value.trim();
  const pay_date = document.querySelector("#pay-date").value;
  const pay_period = document.querySelector("#pay-period").value;

  if (service_name && price) {
    const response = await fetch(`/api/subscriptions`, {
      method: "POST",
      body: JSON.stringify({
        service_name,
        price,
        pay_date,
        pay_period,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to Enter Subscription");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/subscriptions/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete subscription");
    }
  }
};

document
  .querySelector(".new-sub-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".subscription-list")
  .addEventListener("click", delButtonHandler);
