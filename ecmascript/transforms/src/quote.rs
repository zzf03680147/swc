macro_rules! external_name {
    ("typeof") => {
        "_typeof"
    };
    ("instanceof") => {
        "_instanceof"
    };
    ("throw") => {
        "_throw"
    };
    ($s:literal) => {
        $s
    };
}

macro_rules! helper_expr {
    ($field_name:ident, $s:tt) => {{
        helper_expr!(::swc_common::DUMMY_SP, $field_name, $s)
    }};

    ($span:expr, $field_name:ident, $s:tt) => {{
        debug_assert!(
            !$s.starts_with("_"),
            "helper! macro should not invoked with '_' prefix"
        );
        let mark = enable_helper!($field_name);
        let span = $span.apply_mark(mark);
        let external = crate::helpers::HELPERS.with(|helper| helper.external());

        if external {
            quote_ident!(span, "swcHelpers").member(quote_ident!($span, external_name!($s)))
        } else {
            Expr::from(quote_ident!(span, concat!('_', $s)))
        }
    }};
}

macro_rules! helper {
    ($field_name:ident, $s:tt) => {{
        helper!(::swc_common::DUMMY_SP, $field_name, $s)
    }};

    ($span:expr, $field_name:ident, $s:tt) => {{
        helper_expr!($span, $field_name, $s).as_callee()
    }};
}
