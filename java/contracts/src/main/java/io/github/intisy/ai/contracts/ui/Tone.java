package io.github.intisy.ai.contracts.ui;

import io.github.intisy.ai.tsemit.TsLiteral;
import io.github.intisy.ai.tsemit.TsOpen;

/** Named tone a surface renders a table cell in, resolved through its own palette. */
@TsOpen
public enum Tone {
    normal,
    muted,
    mono,
    old,
    @TsLiteral("new")
    NEW
}
