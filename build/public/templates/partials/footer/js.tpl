<script defer src="{relative_path}/assets/nodebb.min.js?{config.cache-buster}"></script>
{{{each scripts}}}
<script defer type="text/javascript" src="{scripts.src}"></script>
{{{end}}}
<script>
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', prepareFooter);
} else {
prepareFooter();
}
function prepareFooter() {
{{{ if useCustomJS }}}
{{customJS}}
{{{ end }}}
$(document).ready(function () {
app.coldLoad();
});
}
</script>