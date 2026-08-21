package io.github.intisy.ai.contracts.capability;

import io.github.intisy.ai.contracts.ui.ActionResult;
import io.github.intisy.ai.tsemit.TsInterface;
import java.util.List;
import java.util.concurrent.CompletionStage;

/** Installs, updates, and removes other plugins. */
@TsInterface
public interface PluginManagementCapability {
    /** Every plugin this manager knows about in the current home. */
    CompletionStage<List<ManagedPlugin>> list();

    CompletionStage<ActionResult> install(String url);

    CompletionStage<ActionResult> update(String id);

    CompletionStage<ActionResult> remove(String id);

    /** Rebuilds and redeploys one installed plugin without fetching. */
    CompletionStage<ActionResult> repair(String id);
}
