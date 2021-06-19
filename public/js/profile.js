

const showTrialPeriod = async () => {
  let trial = document.querySelector('#trial-check');
  let durContainer = document.querySelector('#trial-period-div');

  if (trial.checked === true) {
    durContainer.style.display = 'block';
  } else {
    durContainer.style.display = 'none';
  }
}

const newFormHandler = async (event) => {
  event.preventDefault();

  const service_name = document.querySelector('#sub-name').value.trim();
  const price = document.querySelector('#sub-price').value.trim();
  const pay_date = document.querySelector('#pay-date').value;
  const pay_period = document.querySelector('#pay-period').value;

  let trialCheckBox = document.querySelector('#trial-check');

  let trial;
  let trial_duration;

  if (trialCheckBox.checked === true) {
    trial = true;
    trial_duration = document.querySelector('#trial-period').value;
  } else {
    trial = false;
    trial_duration = null;
  }

  if (service_name && price && pay_date) {
    const response = await fetch(`/api/subscriptions`, {
      method: 'POST',
      body: JSON.stringify({ service_name, price, pay_date, pay_period, trial, trial_duration }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to Enter Subscription');
    }
  }
  console.log(service_name, price, pay_date, pay_period, trial, trial_duration);
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/subscriptions/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete subscription');
    }
  }
};

document
  .querySelector('.new-sub-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.subscription-list')
  .addEventListener('click', delButtonHandler);
