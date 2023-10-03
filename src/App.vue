<template>
  <div class="todoapp">
    <h1 class="todoapp__title">todos</h1>

    <div class="todoapp__content">
      <Header
        length="{todos.length}"
        countActiveTodos="{countActiveTodos}"
        tempTodo="{tempTodo}"
        handleAddTodo="{handleAddTodo}"
        handleAllToggle="{handleAllToggle}"
        handleErrorMessage="{setErrorMessage}"
      />

      <TodoList
        todos="{filteredTodos}"
        tempTodo="{tempTodo}"
        isLoadingTodoIds="{isLoadingTodoIds}"
        handleToggleCompleted="{handleToggle}"
        handleDeleteTodo="{handleDeleteTodo}"
        handleUpdateTodo="{handleUpdateTodo}"
      />

      {todos.length > 0 && (
      <TodoFooter
        filter="{filter}"
        countActiveTodos="{countActiveTodos}"
        hasCompletedTodos="{hasCompletedTodos}"
        handleFilterChange="{setFilter}"
        handleDeleteCompletedTodo="{handleDeleteCompletedTodo}"
      />
      )} {errorMessage !== TodoError.none && (
      <TodoErrors
        errorMessage="{errorMessage}"
        handleErrorMessage="{setErrorMessage}"
      />
      )}
    </div>
  </div>
</template>
