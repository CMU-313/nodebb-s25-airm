<!-- IMPORT partials/breadcrumbs-json-ld.tpl -->
{{{ if config.theme.enableBreadcrumbs }}}
    <!-- IMPORT partials/breadcrumbs.tpl -->
{{{ end }}}

<div class="category-header d-flex flex-column gap-2">
    <div class="d-flex gap-2 align-items-center mb-1 {{{ if config.theme.centerHeaderElements }}}justify-content-center{{{ end }}}">
        {buildCategoryIcon(@value, "40px", "rounded-1 flex-shrink-0")}
        <h1 class="tracking-tight fs-2 fw-semibold mb-0 text-center">{./name}</h1>
    </div>
    {{{ if ./descriptionParsed }}}
        <div class="description text-secondary text-sm w-100 {{{ if config.theme.centerHeaderElements }}}text-center{{{ end }}}">
            {./descriptionParsed}
        </div>
    {{{ end }}}
    <div class="d-flex flex-wrap gap-2 {{{ if config.theme.centerHeaderElements }}}justify-content-center{{{ end }}}">
        <span class="badge text-body border border-gray-300 stats text-xs">
            <span title="{totalTopicCount}" class="fw-bold">{humanReadableNumber(totalTopicCount)}</span>
            <span class="text-lowercase fw-normal">[[global:topics]]</span>
        </span>
        <span class="badge text-body border border-gray-300 stats text-xs">
            <span title="{totalPostCount}" class="fw-bold">{humanReadableNumber(totalPostCount)}</span>
            <span class="text-lowercase fw-normal">[[global:posts]]</span>
        </span>
    </div>

    <!-- Search bar for topics in this category -->
    <div class="category-search-container d-flex justify-content-center mt-2">
        <input type="text" id="category-search" placeholder="Search topics..." class="form-control w-50">
    </div>

    <!-- Container for displaying search results -->
    <div id="category-search-results" class="search-results mt-3"></div>
</div>

{{{ if widgets.header.length }}}
    <div data-widget-area="header">
        {{{ each widgets.header }}}
            {{widgets.header.html}}
        {{{ end }}}
    </div>
{{{ end }}}

<div class="row mt-3">
    <div class="category d-flex flex-column {{{if widgets.sidebar.length }}}col-lg-9 col-sm-12{{{ else }}}col-lg-12{{{ end }}}">
        <!-- IMPORT partials/category/subcategory.tpl -->
        {{{ if (topics.length || privileges.topics:create) }}}
            <!-- IMPORT partials/topic-list-bar.tpl -->
        {{{ end }}}

        {{{ if (!topics.length && privileges.topics:create) }}}
            <div class="alert alert-info" id="category-no-topics">
                [[category:no-topics]]
            </div>
        {{{ end }}}

        <!-- IMPORT partials/topics_list.tpl -->

        {{{ if config.usePagination }}}
            <!-- IMPORT partials/paginator.tpl -->
        {{{ end }}}
    </div>
    <div data-widget-area="sidebar" class="col-lg-3 col-sm-12 {{{ if !widgets.sidebar.length }}}hidden{{{ end }}}">
        {{{ each widgets.sidebar }}}
            {{widgets.sidebar.html}}
        {{{ end }}}
    </div>
</div>
<div data-widget-area="footer">
    {{{ each widgets.footer }}}
        {{widgets.footer.html}}
    {{{ end }}}
</div>

{{{ if !config.usePagination }}}
    <noscript>
        <!-- IMPORT partials/paginator.tpl -->
    </noscript>
{{{ end }}}

<script>
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('category-search');
    const resultsContainer = document.getElementById('category-search-results');
    const cid = parseInt('{./cid}', 10) || 1;

    searchInput.addEventListener('keyup', async (evt) => {
        if (evt.key === 'Enter') {
            const query = searchInput.value.trim();
            if (!query) return;

            try {
                const response = await fetch('/api/search/topics?cid=' + cid + '&query=' + encodeURIComponent(query));
                const data = await response.json();
                renderSearchResults(data);
            } catch (err) {
                console.error('[Category Search] Error:', err);
            }
        }
    });

    function renderSearchResults(data) {
        resultsContainer.innerHTML = '';

        if (!data.topics || !data.topics.length) {
            resultsContainer.innerHTML = '<div class="alert alert-info">No matching topics found.</div>';
            return;
        }

        data.topics.forEach(topic => {
            const topicDiv = document.createElement('div');
            topicDiv.innerHTML = `
                <a href="/topic/${topic.tid}" class="d-block text-decoration-none p-2 border-bottom">
                    ${topic.title}
                </a>
            `;
            resultsContainer.appendChild(topicDiv);
        });
    }
});
</script>
