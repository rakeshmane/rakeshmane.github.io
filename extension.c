/* Dangerous SQLite extension to run shell commands */
#include <sqlite3ext.h>
#include <stdlib.h>
#include <string.h>
SQLITE_EXTENSION_INIT1

#include <stdio.h>

/* Custom function: shell(cmd) → executes cmd with system() */
static void shell_exec(sqlite3_context *context, int argc, sqlite3_value **argv) {
  if (argc != 1 || sqlite3_value_type(argv[0]) != SQLITE_TEXT) {
    sqlite3_result_error(context, "Usage: shell(<command>)", -1);
    return;
  }

  const char *cmd = (const char *)sqlite3_value_text(argv[0]);
  if (cmd == NULL) {
    sqlite3_result_null(context);
    return;
  }

  int ret = system(cmd);  // Execute shell command
  sqlite3_result_int(context, ret);  // Return exit code
}

#ifdef _WIN32
__declspec(dllexport)
#endif
int sqlite3_extension_init(
  sqlite3 *db,
  char **pzErrMsg,
  const sqlite3_api_routines *pApi
){
  SQLITE_EXTENSION_INIT2(pApi);

  // Register function: shell(text) → int
  int rc = sqlite3_create_function(db, "shell", 1, SQLITE_UTF8, 0, shell_exec, 0, 0);
  return rc;
}