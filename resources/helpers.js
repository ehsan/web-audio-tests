function assert_has_property(obj, name, desc) {
  assert_true(undefined != obj[name], desc);
}

function assert_is_method(obj, name, desc) {
  assert_true("function" === typeof obj[name], desc);
}

function assert_defined(obj, desc) {
  assert_true(undefined != obj, desc);
}
