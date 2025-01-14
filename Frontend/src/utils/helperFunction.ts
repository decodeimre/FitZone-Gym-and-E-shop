import Swal from 'sweetalert2';

// booking
export const bookedPopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Book the Course?',
    text: 'If you want to book it ? click Yes!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, book it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

export const cancelPopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes Cancel it!',
    cancelButtonText: 'No Thanks',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

// courses
export const saveCoursePopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Save the Course?',
    text: 'If you want to save the course ? click Yes!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Save it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

export const updateCoursePopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Update the Course?',
    text: 'If you want to update the course info ? click Yes!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Update it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

export const deleteCoursePopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Delete it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

// template
export const saveTemplatePopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Save the Course Template?',
    text: 'If you want to save the template ? click Yes!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, save it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

export const updateTemplatePopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Update the Template?',
    text: 'If you want to update the template info ? click Yes!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Update it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

export const deleteTemplatePopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Delete it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

// user
export const registerUserPopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Register the User?',
    text: 'Are you sure you want to register this member ?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Register!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

export const updateUserPopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Update the User?',
    text: 'Are you sure you want to update this member ?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Update !',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

export const deleteUserPopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Delete it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};


// Products
export const saveProductPopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Save the Product?',
    text: 'If you want to save the product ? click Yes!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, save it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

export const updateProductPopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Update the Product?',
    text: 'If you want to update the product info ? click Yes!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Update it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

export const deleteProductPopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Delete it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};

// checkout
export const OrderCheckPopUp = (): Promise<boolean> => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to place this order ??",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Order it!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};