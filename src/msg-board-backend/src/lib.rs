use ic_cdk::query;
use ic_cdk::update;
use std::cell::RefCell;

thread_local! {
    static MESSAGES: RefCell<Vec<String>> = RefCell::new(Vec::new());
}

#[update]
fn add_message(msg: String) {
    MESSAGES.with(|messages| messages.borrow_mut().push(msg));
}

#[query]
fn get_messages() -> Vec<String> {
    MESSAGES.with(|messages| messages.borrow().clone())
}

#[update]
fn clear_messages() {
    MESSAGES.with(|messages| messages.borrow_mut().clear());
}
