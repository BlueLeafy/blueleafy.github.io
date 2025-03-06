import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const habitsApi = createApi({
    reducerPath: "habits",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005/"
    }),
    tagTypes: ["Habit"],
    endpoints(builder) {
        return {
            // fetch all habits
            fetchHabits: builder.query({
                providesTags: ["Habit"],
                query: () => {
                    return {
                        url: "/habits",
                        method: "GET",
                    };
                },
            }),
            // fetch single habit
            fetchOneHabit: builder.query({
                providesTags: ["Habit"],
                query: (id) => {
                    return {
                        url: `/habits/${id}`,
                        method: "GET"
                    };
                },
            }),
            // add new habit
            addHabit: builder.mutation({
                invalidatesTags: ["Habit"],
                query: (habit) => {
                    return {
                        url: "/habits",
                        body: {
                            id: habit.id,
                            name: habit.name,
                            description: habit.description,
                            goal: parseInt(habit.goal), // Stored as a INT
                            current_count: 0, // Default progress
                            history: [],
                            streak: {
                                current_streak: 0,
                                longest_streak: 0
                            },
                            color: habit.color,
                            priority: habit.priority,
                            completed_today:false,
                        },
                        method: "POST"
                    };
                },
            }),
            // edit habit
            editHabit: builder.mutation({
                invalidatesTags: ["Habit"],
                query: (habit) => {
                    return {
                        url: `/habits/${habit.id}`,
                        method: "PUT",
                        body: {
                            ...habit, // Keep all exiting properties
                        },
                    };
                },
            }),
            // Complete habit (Increment count, update history and streak)
            completeHabit: builder.mutation({
                invalidatesTags: ["Habit"],
                query: ({ id, updatedData }) => ({
                    url: `/habits/${id}`,
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: updatedData,
                }),
            }),            
            // reset habit completetion at midnight
            resetDailyCompletetion: builder.mutation({
                invalidatesTags: ["Habit"],
                query: (id) => {
                    return {
                        url: `/habits/${id}`,
                        body: {
                            completed_today: false
                        },
                        method: "PATCH"
                    };
                },
            }),
            // remove habit
            removeHabit: builder.mutation({
                invalidatesTags: ["Habit"],
                query: (habit) => {
                    return {
                        url: `/habits/${habit.id}`,
                        method: "DELETE"
                    }
                }
            })
        };
    },
});

export const { 
    useFetchHabitsQuery, 
    useFetchOneHabitQuery,
    useAddHabitMutation, 
    useEditTaskMutation, 
    useCompleteHabitMutation,
    useRemoveHabitMutation } = habitsApi;

// export uses
export { habitsApi };