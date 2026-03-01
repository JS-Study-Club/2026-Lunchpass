// Month(number)
// Day(number)
// DayOfWeek(string)
// isCancel(boolean)
// TicketType("Breakfast" || "Dinner") 
// id(number)

export const TicketDummy = {
    HaveTicket: true,
    Tickets:
        [
            {
                id: 1,
                date: {
                    month: 3,
                    day: 6,
                    dayofweek: "금"
                },
                isCancel: false,
                TicketType: "Breakfast"
            },
            {
                id: 2,
                date: {
                    month: 3,
                    day: 9,
                    dayofweek: "월"
                },
                isCancel: true,
                TicketType: "Breakfast"
            },
            {
                id: 3,
                date: {
                    month: 3,
                    day: 9,
                    dayofweek: "월"
                },
                isCancel: false,
                TicketType: "Dinner"
            },
            {
                id: 4,
                date: {
                    month: 3,
                    day: 10,
                    dayofweek: "화"
                },
                isCancel: false,
                TicketType: "Breakfast"
            },
            {
                id: 5,
                date: {
                    month: 3,
                    day: 10,
                    dayofweek: "화"
                },
                isCancel: false,
                TicketType: "Dinner"
            },
            {
                id: 6,
                date: {
                    month: 3,
                    day: 11,
                    dayofweek: "수"
                },
                isCancel: true,
                TicketType: "Breakfast"
            },
            {
                id: 7,
                date: {
                    month: 3,
                    day: 11,
                    dayofweek: "수"
                },
                isCancel: true,
                TicketType: "Dinner"
            },
            {
                id: 8,
                date: {
                    month: 3,
                    day: 12,
                    dayofweek: "목"
                },
                isCancel: false,
                TicketType: "Breakfast"
            }
        ] 
}

export default TicketDummy;