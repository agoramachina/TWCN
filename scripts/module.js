/* ----------------------------- */
/* Initialize module             */
/* ----------------------------- */

Hooks.once('init', async function() {
   console.log('twcn | !!!!!!!INITIALIZING TWCN!!!!!!!');
   //setupSocket();
   //initHooks();
});

/* ----------------------------- */
/* Setup module                  */
/* ----------------------------- */
Hooks.once('setup', function() {
   // Do anything after "init" but before "ready"
   setupFlags();

});

/* ----------------------------- */
/* Run when ready                */
/* ----------------------------- */
Hooks.once('ready', async function() {
   //readyHooks();
});






function setupFlags() {
   //twcnFlags.push("flags.twcn.rads")
   //twcnFlags.push("flags.twcn.radLV")


}



/**
 * Add window listeners to catch errors so we can print out the stack trace.
 */
window.addEventListener('error', (event) => { s_ERROR_HANDLER(event.error); });
window.addEventListener('unhandledrejection', (event) => { s_ERROR_HANDLER(event.reason); });

/**
 * Just a convenience to print out the full stack trace in order to be able to use NPM module stacktracify to
 * reverse it against a private source map.
 *
 * @param {Error} error - An error!
 */
const s_ERROR_HANDLER = (error) =>
{
   if (typeof error.stack !== 'string') { return; }

   // Only print out stack trace if it includes `TWCN`.
   if (error.stack.includes('TWCN'))
   {
      console.log(`Let's get the stack trace / use Chrome dev tools if shipping source maps or stacktracify:`);

      const lines = error.stack.split('\n');
      lines.splice(0, 1);
      console.log(lines.join('\r\n'));
   }
};