import {React, useEffect, useRef} from "react";
import Editor from "@monaco-editor/react";

function SQLEditor({dialect}) {
  const keywords = {
    trino: [
      "SELECT", "FROM", "WHERE", "GROUP BY", "ORDER BY", "HAVING",
      "CREATE TABLE", "DROP TABLE", "ALTER TABLE", "JOIN", "UNION",
      "date_add", "json_parse", "approx_distinct"
    ],
    spark: [
      "SELECT", "FROM", "WHERE", "GROUP BY", "ORDER BY", "HAVING",
      "CREATE TABLE", "DROP TABLE", "ALTER TABLE", "JOIN", "UNION",
      "date_add", "from_json", "approx_count_distinct"
    ]
  };

  const providerRef = useRef(null);

  const registerSQLAutocomplete = (monaco) => {
    if (providerRef.current) {
      providerRef.current.dispose();
      providerRef.current = null;
    }

    providerRef.current = monaco.languages.registerCompletionItemProvider("sql", {
      provideCompletionItems: () => {
        const keywordSuggestions = (keywords[dialect] || []).map((word) => ({
          label: word,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: word
        }));

        return { suggestions: keywordSuggestions };
      }
    });
  };

  useEffect(() => {
    if (window.monaco) {
      registerSQLAutocomplete(window.monaco);
    }
  }, [dialect]);
  
  return (
      <div>
      <Editor
        defaultLanguage="sql"
        height="400px"
        defaultValue="SELECT * FROM"
        theme="vs-dark"
        beforeMount={(monaco) => {
          window.monaco = monaco;
          registerSQLAutocomplete(monaco);
        }}
      />
      </div>
    );
  }
  
  export default SQLEditor;